// import React from "react";

import {
    IconLinkedin,
    IconGitHub,
    IconFacebook,
    IconTwitter,
} from '../../components/icons'

const Icon = ({ name }) => {
    switch (name) {
        case 'Linkedin':
            return <IconLinkedin/>;
        case 'Github':
            return <IconGitHub/>;
        case 'Facebook':
            return <IconFacebook/>;
        case 'Twitter':
            return <IconTwitter/>;      
    }
}

export {Icon}