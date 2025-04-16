import { Request, Response } from "express";
import { prisma } from "../lib/prisma";

export const addWeight = async (req: Request, res: Response) => {
  try {
    const { value, date, userId } = req.body;
    const weight = await prisma.weight.create({
      data: {
        value,
        date,
        userId,
      }
    })

    res.status(201).json({
      message: "Weight created successfully",
      weight: {
        id: weight.id,
        value: weight.value,
        date: weight.date,
        userId: weight.userId,
      },
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
}

export const getWeight = async (req: Request, res: Response): Promise<any> => {
  const { userId, from, to } = req.query;

  if (!userId) {
    return res.status(400).json({ error: "userId is required" });
  }

  const parseDate = (date: string) => {
    const [day, month, year] = date.split("/").map(Number);
    return new Date(year, month - 1, day);
  };

  try {
    let where: any = {
      userId: Number(userId),
    };

    if (typeof from === "string" && typeof to === "string") {
      const startDate = parseDate(from);
      const endDate = parseDate(to);
      endDate.setDate(endDate.getDate() + 1);

      where.date = {
        gte: startDate,
        lte: endDate,
      };
    }

    const weights = await prisma.weight.findMany({
      where,
      orderBy: {
        date: "desc",
      },
    });

    res.json(weights);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch weights" });
  }
};