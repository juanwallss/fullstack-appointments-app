import { getTokenData } from '@/helpers/getTokenData'
import Professional from '@/models/professionalModel'
import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const businessId = getTokenData(request)

    console.log(businessId);
    const reqBody = await request.json()
    const { name, specialty, phone, email } = reqBody
    const existingProfessional = await Professional.findOne({where: { email: email }})
    console.log(existingProfessional);
    if (existingProfessional) {
      return new NextResponse('Profesional existente', { status: 400 })
    }
    const newProfessional = new Professional({
      business_id: businessId,
      name,
      specialty,
      phone,
      email
    })
    await newProfessional.save()
    return new NextResponse('Profesional creado con exito', { status: 201 })
  } catch (error) {
    console.log(error);
    return new NextResponse({ error: error.message })
  }
}

export async function GET(request) {
  try {
    const businessId = getTokenData(request)
    const professionals = await Professional.findAll({ where: { business_id: businessId } })

    return NextResponse.json(professionals, { status: 200 })
  } catch (error) {
    console.log(error)
    return new NextResponse(JSON.stringify({ error: error.message }), { status: 500 })
  }
}
