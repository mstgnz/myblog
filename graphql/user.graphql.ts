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