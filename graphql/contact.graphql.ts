import { gql } from '@apollo/client';

export interface Contact {
    id: number;
    fullname: string;
    email: string;
    subject: string;
    message: string;
    status: string;
    created_at: Date;
}

export const CONTACT_COUNT = gql`
    query CONTACT_COUNT($where: contacts_bool_exp) {
        contacts_aggregate(where: $where) {
            aggregate {
                count
            }
        }
    }
`;

export const GET_CONTACTS = gql`
    query GET_CONTACTS(
        $where: contacts_bool_exp
        $limit: Int
        $offset: Int
        $orderBy: order_by = asc
    ) {
        contacts(
            where: $where
            limit: $limit
            offset: $offset
            order_by: { id: $orderBy }
        ) {
            id
            fullname
            email
            subject
            message
            status
            created_at
        }
    }
`;

export const SUBSCRIBE_TO_CONTACTS = gql`
    subscription SUBSCRIBE_TO_CONTACTS(
        $where: contacts_bool_exp
        $limit: Int
        $offset: Int
        $orderBy: order_by = asc
    ) {
        contacts(
            where: $where
            limit: $limit
            offset: $offset
            order_by: { id: $orderBy }
        ) {
            id
            fullname
            email
            subject
            message
            status
            created_at
        }
    }
`;