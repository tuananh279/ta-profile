'use client'
import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/react';
import { useState } from 'react';

interface MenuItemI {
    name: string,
    id: string
}

const menuItems: MenuItemI[] = [
    {
        name: "Profile",
        id: "profile"
    },
    {
        name: "Experience",
        id: "experience"
    },
    {
        name: "Skill",
        id: "skill"
    },
    {
        name: "Project",
        id: "project"
    },
    {
        name: "Contact",
        id: "contact"
    },
]

const NavbarRoot = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [itemSelected, setItemSelected] = useState(menuItems[0].id)

    return (
        <Navbar disableScrollHandler={false} onScrollPositionChange={(position) => console.log("position: ", position)} onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className='sm:hidden' />
                <NavbarBrand>
                    <p className="font-bold text-inherit">TNHHUAA</p>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {
                    menuItems.map((item) => (
                        <NavbarItem key={item.id}>
                            <Link href={`#${item.id}`}>
                                {item.name}
                            </Link>
                        </NavbarItem>
                    ))
                }
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Contact
                    </Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link href={`#${item.id}`}>
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    )
}

export default NavbarRoot