import React from 'react'
import Helmet from 'react-helmet'

export default () =>
    <Helmet>
        {/* <!-- Primary Meta Tags --> */}
        <title>Agence digitale Prométhée</title>
                <meta name="title" content="Agence digitale Prométhée" />
                <meta name="description" content="une agence digitale basée sur la confiance, la collaboration et la formation.
                Nous vous accompagnons dans votre transformation digitale."/>

            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://metatags.io/"/>
            <meta property="og:title" content="Agence digitale Prométhée"/>
            <meta property="og:description" content="une agence digitale basée sur la confiance, la collaboration et la formation.
            Nous vous accompagnons dans votre transformation digitale."/>
            <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/>

            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content="https://metatags.io/"/>
            <meta property="twitter:title" content="Agence digitale Prométhée"/>
            <meta property="twitter:description" content="une agence digitale basée sur la confiance, la collaboration et la formation.
            Nous vous accompagnons dans votre transformation digitale."/>
            <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/>
    </Helmet>