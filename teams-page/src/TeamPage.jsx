import React from 'react';

const TeamPage = () => {
    const teamMembers = [
        {
            name: 'John Doe',
            role: 'Developer',
            image: 'member1.jpg', 
            whatsappNumber: '+123456789',
            linkedinUrl: 'https://linkedin.com/in/johndoe', 
        },
        {
            name: 'Jane Smith',
            role: 'Designer',
            image: 'member2.jpg', 
            whatsappNumber: '+987654321',
            linkedinUrl: 'https://linkedin.com/in/janesmith', 
        },
    ];

    return (
        <div className="team-page">
            <h2>Our Amazing Teams</h2>
            <div className="team">
                {teamMembers.map((member, index) => (
                    <div key={index} className="member">
                        <img src={member.image} alt={member.name} />
                        <h3>{member.name}</h3>
                        <p>{member.role}</p>
                        <div className="social-links">
                            <div className="whatsapp">
                                <img src="./images/whatsapp.webp" alt="WhatsApp" />
                                <div className="whatsapp-number">{member.whatsappNumber}</div>
                            </div>
                            <div className="linkedin-link">
                                <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer">
                                    <img src="./images/linkedin.webp" alt="LinkedIn" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <h2>Our Amazing Teams</h2>
            <div className="team">
                {teamMembers.map((member, index) => (
                    <div key={index} className="member">
                        <img src={member.image} alt={member.name} />
                        <h3>{member.name}</h3>
                        <p>{member.role}</p>
                        <div className="social-links">
                            <div className="whatsapp">
                                <img src="./images/whatsapp.webp" alt="WhatsApp" />
                                <div className="whatsapp-number">{member.whatsappNumber}</div>
                            </div>
                            <div className="linkedin-link">
                                <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer">
                                    <img src="./images/linkedin.webp" alt="LinkedIn" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <h2>Our Amazing Teams</h2>
            <div className="team">
                {teamMembers.map((member, index) => (
                    <div key={index} className="member">
                        <img src={member.image} alt={member.name} />
                        <h3>{member.name}</h3>
                        <p>{member.role}</p>
                        <div className="social-links">
                            <div className="whatsapp">
                                <img src="./images/whatsapp.webp" alt="WhatsApp" />
                                <div className="whatsapp-number">{member.whatsappNumber}</div>
                            </div>
                            <div className="linkedin-link">
                                <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer">
                                    <img src="./images/linkedin.webp" alt="LinkedIn" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <h2>Our Amazing Teams</h2>
            <div className="team">
                {teamMembers.map((member, index) => (
                    <div key={index} className="member">
                        <img src={member.image} alt={member.name} />
                        <h3>{member.name}</h3>
                        <p>{member.role}</p>
                        <div className="social-links">
                            <div className="whatsapp">
                                <img src="./images/whatsapp.webp" alt="WhatsApp" />
                                <div className="whatsapp-number">{member.whatsappNumber}</div>
                            </div>
                            <div className="linkedin-link">
                                <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer">
                                    <img src="./images/linkedin.webp" alt="LinkedIn" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamPage;
