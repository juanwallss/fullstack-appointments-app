import Image from "next/image"
import Link from "next/link"

const routes = [
  {
    title: 'MENU',
    items: [
      {
        path: '/dashboard',
        label: 'Dashboard',
        icon: '/dashboard.png'
      },
      {
        path: '/citas',
        label: 'Citas',
        icon: '/handshake.png'
      },
      {
        path: '/clientes',
        label: 'Clientes',
        icon: '/people.png'
      },
      {
        path: '/profesionales',
        label: 'Profesionales',
        icon: '/businessman.png'
      }
    ]
  },
  {
    title: '',
    items: [
      {
        path: '/logout',
        label: 'Cerrar Sesion',
        icon: '/logout.png'
      }
    ]
  }
]
export default function SideBar() {
  return (
    <div>
    {routes.map(r => (
      <div key={r.title} className="flex flex-col gap-2">
        <span className="hidden lg:block text-gray-500 font-light my-4">{r.title}</span>
        {
          r.items.map(i => (
            <Link href={i.path} key={i.label} className="flex items-center justify-center lg:justify-start gap-3 text-gray-500 hover:text-cyan-500">
              <Image src={i.icon} alt={i.label} width={22} height={22} />
              <span className="hidden lg:block">{i.label}</span>
            </Link>
          ))
        }
      </div>
    ))}
    </div>
  )
}
