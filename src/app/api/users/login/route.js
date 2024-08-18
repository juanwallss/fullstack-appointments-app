import User from "@/models/userModel";
import { NextResponse } from "next/server";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken'; // Necesitarás instalar este paquete

const JWT_SECRET = process.env.JWT_SECRET; // Asegúrate de definir esta variable en tu archivo .env

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    // Verifica si el usuario existe
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return NextResponse.json('Usuario no encontrado', { status: 404 });
    }

    // Compara la contraseña
    const isPasswordValid = bcryptjs.compareSync(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json('Contraseña incorrecta', { status: 401 });
    }

    // Genera un token JWT (opcional)
    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
    const response = NextResponse.json({ message: 'Inicio de sesión exitoso', success: true}, { status: 200 }) 
    response.cookies.set("token", token, {
      httpOnly: true,
      maxAge: 3600000, // 1 hora en milisegundos
    })
    return response
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
