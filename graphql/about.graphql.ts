import { gql } from '@apollo/client';

export interface Contact {
    id: number;
    title: string;
    content: string;
    display_order: number;
    is_visible: boolean;
    created_at: Date;
    updated_at: Date;
}

export const ABOUT_COUNT = gql`
    query ABOUT_COUNT($where: abouts_bool_exp) {
        abouts_aggregate(where: $where) {
            aggregate {
                count
            }
        }
    }
`;

export const GET_ABOUTS = gql`
    query GET_ABOUTS(
        $where: abouts_bool_exp
    ) {
        abouts(
            where: $where
        ) {
            id
            title
            content
            display_order
            is_visible
            created_at
        }
    }
`;