export interface Permission {
    name: string;
    label: string;
    isPermit: number;
}

export interface Action {
    name: string;
    label: string;
    link: string;
    icon: string;
    is_admin: number;
    permission: Permission[];
}

export interface UserObj {
    name: string;
    label: string;
    icon: string;
    is_admin: number;
    actions: Action[];
}
