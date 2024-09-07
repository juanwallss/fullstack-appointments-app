import Image from "next/image"
import Link from "next/link"
import DashboardIcon from '@mui/icons-material/Dashboard';
import { People, HandshakeTwoTone, EngineeringTwoTone } from "@mui/icons-material";
const routes = [
  {
    title: 'MENU',
    items: [
      {
        path: '/dashboard',
        label: 'Dashboard',
        icon: DashboardIcon
      },
      {
        path: '/citas',
        label: 'Citas',
        icon: HandshakeTwoTone
      },
      {
        path: '/clientes',
        label: 'Clientes',
        icon: People
      },
      {
        path: '/profesionales',
        label: 'Profesionales',
        icon: EngineeringTwoTone
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
            <Link href={i.path} key={i.label} className="flex items-center justify-center lg:justify-start gap-3 text-gray-500 hover:text-mainCyan">
              <i.icon />
              <span className="hidden lg:block">{i.label}</span>
            </Link>
          ))
        }
      </div>
    ))}
    </div>
  )
}
