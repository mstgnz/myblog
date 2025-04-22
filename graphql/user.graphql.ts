import { gql } from '@apollo/client';

export interface User {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    active: boolean;
    logo: string;
    code: string;
    last_login: Date;
    created_at: Date;
    updated_at: Date;
}

export const USER_COUNT = gql`
    query USER_COUNT($where: users_bool_exp) {
        users_aggregate(where: $where) {
            aggregate {
                count
            }
        }
    }
`;

export const GET_USERS = gql`
    query GET_USERS(
        $where: users_bool_exp
        $limit: Int
        $offset: Int
        $orderBy: order_by = asc
    ) {
        users(
            where: $where
            limit: $limit
            offset: $offset
            order_by: { id: $orderBy }
        ) {
            id
            firstname
            lastname
            email
            phone
            active
            user_type {
            id
            name
            }
        }
    }
`;

export const GET_USER = gql`
    query GET_USER($id: Int!) {
        users_by_pk(id: $id) {
            id
            firstname
            lastname
            email
            phone
            active
            user_type {
                id
                name
            }
        }
    }
`;


export const CREATE_USER = gql`
    mutation CREATE_USER($firstname: String!, $lastname: String!, $email: String!, $phone: String!, $active: Boolean!, $user_type_id: Int!) {
        insert_users(object: {firstname: $firstname, lastname: $lastname, email: $email, phone: $phone, active: $active, user_type_id: $user_type_id}) {
            affected_rows
            returning {
                id
                firstname
                lastname
                email
                phone
                active
            }
        }
    }
`;

export const UPDATE_USER = gql`
    mutation UPDATE_USER($id: Int!, $firstname: String!, $lastname: String!, $email: String!, $phone: String!, $active: Boolean!, $user_type_id: Int!) {
        update_users(pk_columns: {id: $id}, _set: {firstname: $firstname, lastname: $lastname, email: $email, phone: $phone, active: $active, user_type_id: $user_type_id}) {
            affected_rows
        }
    }
`;

export const DELETE_USER = gql`
    mutation DELETE_USER($id: Int!) {
         delete_users(where: { id: { _eq: $id } }) {
            affected_rows
        }
    }
`;

export const SUBSCRIBE_TO_USERS = gql`
    subscription SUBSCRIBE_TO_USERS(
        $where: users_bool_exp
        $limit: Int
        $offset: Int
        $orderBy: order_by = asc
    ) {
        users(
            where: $where
            limit: $limit
            offset: $offset
            order_by: { id: $orderBy }
        ) {
            id
            firstname
            lastname
            email
            phone
            active
            user_type {
            id
            name
            }
        }
    }
`;