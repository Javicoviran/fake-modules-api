import { ModuleDto } from '../models/module.dto';

export const FAKEMODULES: ModuleDto[] = [
  {
    title: 'Dashboard',
    description: 'Visión general de métricas clave y estadísticas.',
    path: '/dashboard',
    roles: ['admin', 'user'],
    icon: 'dashboard',
  },
  {
    title: 'Usuarios',
    description: 'Gestión de usuarios y permisos.',
    path: '/users',
    roles: ['admin'],
    icon: 'person',
  },
  {
    title: 'Admin',
    description: 'Panel de administración y configuración avanzada.',
    path: '/admin',
    roles: ['admin'],
    icon: 'admin_panel_settings',
  },
  {
    title: 'Backup',
    description: 'Administración de copias de seguridad y restauración.',
    path: '/backup',
    roles: ['admin'],
    icon: 'backup',
  },
  {
    title: 'Reportes',
    description: 'Visualización y generación de reportes.',
    path: '/reports',
    roles: ['admin', 'user'],
    icon: 'bar_chart',
  },
  {
    title: 'Proyectos',
    description: 'Gestión de proyectos y tareas.',
    path: '/projects',
    roles: ['admin', 'project_manager'],
    icon: 'folder',
  },
  {
    title: 'Soporte',
    description: 'Soporte técnico y ayuda.',
    path: '/support',
    roles: ['admin', 'user'],
    icon: 'support',
  },
  {
    title: 'Logs del sistema',
    description: 'Registro de actividades y eventos del sistema.',
    path: '/logs',
    roles: ['admin'],
    icon: 'history',
  },
];
