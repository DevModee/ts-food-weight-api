import { Request, Response } from "express";
import { prisma } from "../lib/prisma";

export const addFood = async (req: Request, res: Response) => {
  try {
    const { text, calories, proteins, carbs, date, userId } = req.body;
    const food = await prisma.food.create({
      data: {
        text,
        calories,
        proteins,
        carbs,
        date,
        userId,
      }
    })

    res.status(201).json({
      message: "Food created successfully",
      food: {
        id: food.id,
        text: food.text,
        calories: food.calories,
        proteins: food.proteins,
        carbs: food.carbs,
        date: food.date,
        userId: food.userId,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
}

export const getFood = async (req: Request, res: Response): Promise<any> => {
  const { userId, from, to } = req.query;

  if (!userId) {
    return res.status(400).json({ error: "userId is required" });
  }

  const parseDate = (date: string) => {
    const [day, month, year] = date.split('/').map(Number);
    return new Date(year, month - 1, day);
  };

  try {
    let whereCondition: any = {
      userId: Number(userId),
    };

    if (typeof from === 'string' && typeof to === 'string') {
      const startDate = parseDate(from);
      const endDate = parseDate(to);
      endDate.setDate(endDate.getDate() + 1);

      whereCondition.date = {
        gte: startDate,
        lte: endDate,
      };
    }

    const foods = await prisma.food.findMany({
      where: whereCondition,
      orderBy: {
        date: 'desc',
      },
    });

    res.json(foods);
  } catch (error) {
    console.error('Error fetching foods:', error);
    res.status(500).json({ error: 'Failed to fetch foods' });
  }
};