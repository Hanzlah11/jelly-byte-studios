import React from 'react'
import GameCard from '../../../components/game-card/GameCard'
import GettingUnderTheNerve from '../../../assets/Game/image.png'
import './Releases.css'
import useScrollReveal from '../../../hooks/useScrollReveal'

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
    const headingReveal = useScrollReveal({ threshold: 0.2 });
    const cardsReveal = useScrollReveal({ threshold: 0.1 });

    return (
        <div id='Releases'>
            <div
                ref={headingReveal.ref}
                className={`releases-heading reveal-fade-up ${headingReveal.isVisible ? 'revealed' : ''}`}
            >
                BUILD TO PLAY, MADE TO REMEMBER
            </div>
            <div className={`dash reveal-fade-up ${headingReveal.isVisible ? 'revealed' : ''}`} style={{ transitionDelay: '0.15s' }}>
                <hr />
            </div>

            <div
                ref={cardsReveal.ref}
                className={`releases-cards stagger-children ${cardsReveal.isVisible ? 'cards-revealed' : ''}`}
            >
                {releases.map((release, index) => (
                    <div
                        key={index}
                        className={`releases-card-item reveal-fade-up ${cardsReveal.isVisible ? 'revealed' : ''}`}
                        style={{ transitionDelay: `${index * 0.15}s` }}
                    >
                        <GameCard
                            title={release.title}
                            description={release.description}
                            image={release.image}
                            link={release.link}
                            comingSoon={release.comingSoon}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Releases
