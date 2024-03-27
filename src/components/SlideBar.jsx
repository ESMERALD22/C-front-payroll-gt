import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { menuSuperAdmin, menuAdmin, menuUser } from "../services/menu-service";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
const Sidebar = ({ role, onPathChange }) => {
  const navigate = useNavigate();

  let menuData = [];

  switch (role) {
    case 'superadmin':
      menuData = menuSuperAdmin;
      break;
    case 'admin':
      menuData = menuAdmin;
      break;
    case 'user':
      menuData = menuUser;
      break;
    default:
      menuData = [];
  }

  const [selectedPaths, setSelectedPaths] = useState([]);

  const handleItemClick = (path) => {
    const updatedPaths = [path];
    console.log(updatedPaths);
    onPathChange(updatedPaths);
  };

  const cerrarSesion = () => {
    sessionStorage.clear();
    navigate('/');
  };

  return (
    <Accordion type='single' collapsible>
      {menuData.map((menuItem, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger >{menuItem.name}</AccordionTrigger>
          <AccordionContent>
            <ul>
              {menuItem.submenu.map((subMenuItem, subIndex) => (
                <li key={subIndex}>
                  <Link to={subMenuItem.path} onClick={() => handleItemClick(subMenuItem.path)}>{subMenuItem.name}</Link>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
      {sessionStorage.getItem('role') && ( 
        <Button variant="danger" onClick={cerrarSesion} > Salir</Button>
      )}    
    </Accordion>
  );
};

export default Sidebar;
