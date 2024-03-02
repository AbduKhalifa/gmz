


import React, { useEffect, useState } from 'react'
import CategoryClans from './CategoryClans'
import SearchAboutClan from './SearchAboutClan'
import Advice from './Advice'
import axios from 'axios';
import { domain } from '../../vars/var';
import CreateClan from './CreateClan';

export default function ClanPage() {

    const [randomClans, setRandomClans] = useState(null);

    async function getRandomClans() {
        const endPoint = "/clan/randomClans"
        const { data } = await axios.get(domain + endPoint);
        setRandomClans(data.clans)
    }


    useEffect(() => {
        getRandomClans();
    }, [])

    return (
        <section>
            <CategoryClans />
            <Advice />
            <SearchAboutClan randomClans={randomClans} />
            <CreateClan />
        </section>
    )
}
