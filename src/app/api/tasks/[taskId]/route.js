import { NextResponse } from "next/server";
import { prisma } from "../../../../libs/prisma";

export async function GET(request, { params }) {
  const id = parseInt(params.taskId);

  const task = await prisma.task.findUnique({
    where: { id },
  });

  return NextResponse.json(task);
}

export async function PUT(request, { params }) {
  const id = parseInt(params.taskId);

  try {
    const task = await request.json();

    const updatedTask = await prisma.task.update({
      where: {
        id,
      },
      data: task,
    });
    return NextResponse.json(updatedTask);

  } 
  catch (error) {
    return NextResponse.json("No existe usuario con ese id");   
  }
}

export async function DELETE(request, { params }) {
  const id = parseInt(params.taskId);

  try {
    const deletedTask = await prisma.task.delete({
      where: {
        id,
      },
    });

    return NextResponse.json(deletedTask);
  } 
  catch (error) {
    return NextResponse.json("No existe usuario con ese id");
  }
}
