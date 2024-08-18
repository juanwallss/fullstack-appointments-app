import User from "@/models/userModel";
import { NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'


export async function POST (request) {
  try {
    // console.log("req nom", request.json())
    const reqBody = await request.json()

    const { name, username, email, password } = reqBody

    // check if user already exists
    const existingUser = await User.findOne({ email: reqBody.email })
    if (existingUser) {
      return NextResponse.json('Usuario existente', { status: 400 })
    }

    // // hash password
    const hashedPassword = bcryptjs.hashSync(password, 10)
    const user = new User({
      name,
      username,
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