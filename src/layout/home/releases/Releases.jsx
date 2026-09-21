import React from 'react'
import GameCard from '../../../components/game-card/GameCard'
import GettingUnderTheNerve from '../../../assets/Game/image.png'
import './Releases.css'

const releases = [
    {
        title: 'GETTING UNDER THE NERVE',
        description: 'Getting Under the Nerve is a high-octane tactical shooter where every decision matters. Breach, clear, and survive in a neon-drenched dystopian future.',
        image: GettingUnderTheNerve,
        link: '#',
    },
    {
        title: 'CLASSIFIED',
        description: '',
        image: GettingUnderTheNerve,
        link: '#',
        comingSoon: true,
    },
    {
        title: 'CLASSIFIED',
        description: '',
        image: GettingUnderTheNerve,
        link: '#',
        comingSoon: true,
    }
]

const Releases = () => {
    return (
        <div id='Releases'>
            <div className="releases-heading">
                BUILD TO PLAY, MADE TO REMEMBER
            </div>
            <div className="dash">
                <hr />
            </div>

            <div className="releases-cards">
                {releases.map((release, index) => (
                    <GameCard
                        key={index}
                        title={release.title}
                        description={release.description}
                        image={release.image}
                        link={release.link}
                        comingSoon={release.comingSoon}
                    />
                ))}
            </div>
        </div>
    )
}

export default Releases
