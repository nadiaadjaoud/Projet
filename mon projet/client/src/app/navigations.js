import { authRoles } from 'app/auth/authRoles'

export const navigations = [
    {
        name: 'Dashboard',
        path: '/dashboard/default',
        icon: 'dashboard',
        auth: authRoles.sa // ONLY SUPER ADMIN(SA) CAN ACCESS
    },
    {
        name: 'Analytics',
        path: '/dashboard/analytics',
        icon: 'analytics',
        auth: authRoles.admin // ONLY SUPER ADMIN(SA) AND ADMIN CAN ACCESS
    },

    {
        label: 'Pages',
        type: 'label',
    },
    {
        name: 'Prestataires',
        icon: 'people',
        children: [
            {
                name: 'Liste des prestataires',
                path: '/pages/customer-list',
                iconText: 'PL',
              },
            
             
            ],
        },
        {
            name: 'Produits',
            icon: 'shopping_cart',
            children: [
              {
                name: 'Liste des produits',
                path: '/pages/product-list',
                iconText: 'PL',
              },
             
            
            ],
        },
    
    {
        name: 'Commandes',
        icon: 'folder',
        children: [
            {
                name: 'Liste des commandes',
                path: '/pages/order-list',
                iconText: 'OL',
            },
            {
                name: 'Liste des livraisons',
                path: '/invoice/fdskfjdsuoiucrwevbgd',
                iconText: 'VO',
            },
        ],
    },
   
   
    {
        name: 'User Profile',
        path: '/page-layouts/user-profile',
        icon: 'person',
    },

   
    
   
]

export const getfilteredNavigations = (navList = [], role) => {
    return navList.reduce((array, nav) => {
        if (nav.auth) {
            if (nav.auth.includes(role)) {
                array.push(nav)
            }
        } else {
            if (nav.children) {
                nav.children = getfilteredNavigations(nav.children, role)
                array.push(nav)
            } else {
                array.push(nav)
            }
        }
        return array
    }, [])
}
