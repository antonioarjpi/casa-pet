import NavItem from "../navitem/navitem";

function Navbar() {
    return (
        <nav id="menu-horizontal">
            <ul>
                <NavItem label="Início" href="/inicio"/>
                <NavItem label="Casa pet" href="quem-somos"/>
                <NavItem label="Voluntários" href="voluntarios"/>
                <NavItem label="Adoções/Padrinhos" href="adoçoes"/>
                <NavItem label="Ajuda" href="doações"/>
                <NavItem label="Contatos" href="contatos"/>
            </ul>
        </nav>
    )
}

export default Navbar;