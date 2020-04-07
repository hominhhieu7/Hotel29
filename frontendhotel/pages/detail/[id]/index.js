import Layout from '../../../components/Layout'
import { API } from '../../../services/apiResource';
import apiService from '../../../services/apiServices'
import React, { useState, useEffect } from 'react'
import RenderHotel from './renderHotel';
import RenderComments from './renderComment';

export default function Index(props) {
    return (
        <Layout>
            <RenderHotel hotel={props.hotel} />
            <RenderComments comments={props.comments} />
        </Layout>
    )
}
export async function getStaticProps({ params }) {
    try {
        const comments = await apiService.get(API.HOTELS.getAll + `/${params.id}/` + API.COMMENTS.get);
        const hotels = await apiService.get(API.HOTELS.getAll);
        const hotel = hotels.find(x => x.id === params.id);
        return {
            props: {
                comments: comments,
                hotel: hotel
            }
        }
    } catch (error) {
        console.log("Failed to fetch: ");
    }

}
export async function getStaticPaths() {
    try {
        const hotels = await apiService.get(API.HOTELS.getAll);
        const paths = hotels.map(x => ({
            params: { id: x.id }
        }));

        return {
            paths,
            fallback: false,
        };
    } catch (error) {
        console.log("Failed to fetch: ");
    }

}