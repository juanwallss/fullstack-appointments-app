import { getTokenData } from "@/helpers/getTokenData";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";

export async function GET(request) {
  try {
    const userId = await getTokenData(request)
    const user = await User.findOne({ where: { id: userId } });
    return NextResponse.json({
      name: user.name,
      email: user.email,
    })
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({error: error.message})
  }
}