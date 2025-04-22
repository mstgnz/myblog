import { gql } from '@apollo/client';

export interface Category {
    id: number;
    parent_id: number;
    name: string;
}

export const CATEGORY_COUNT = gql`
    query CATEGORY_COUNT($where: categories_bool_exp) {
        categories_aggregate(where: $where) {
            aggregate {
                count
            }
        }
    }
`;

export const GET_CATEGORIES = gql`
    query GET_CATEGORIES(
        $where: categories_bool_exp
    ) {
        categories(
            where: $where
        ) {
            id
            parent_id
            name
        }
    }
`;