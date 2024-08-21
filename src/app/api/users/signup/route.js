import User from "@/models/userModel";
import { NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'


export async function POST (request) {
  try {
    // console.log("req nom", request.json())
    const reqBody = await request.json()

    const { name, email, password } = reqBody

    // check if user already exists
    const existingUser = await User.findOne({where: { email: email }})
    if (existingUser) {
      console.log(existingUser);
      console.log(email);
      return NextResponse.json('Usuario existente', { status: 400 })
    }

    // // hash password
    const hashedPassword = bcryptjs.hashSync(password, 10)
    const user = new User({
      name,
      email,
      password: hashedPassword
    })
    const savedUser = await user.save()
    return NextResponse.json('Creacion exitosa!', { status: 201 })
  } catch (error) {
    return NextResponse.json({
      error: error.message
    })
  }
}