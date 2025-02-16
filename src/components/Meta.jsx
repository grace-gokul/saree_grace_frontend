import React from 'react';
import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "India's No.1 Online Saree Shop - SareeGrace",
  description:
    "Discover a wide range of exquisite sarees at SareeGrace. Shop the latest silk, cotton, designer, and traditional sarees online with fast delivery and secure payments.",
  keywords:
    "online saree shopping, silk sarees, cotton sarees, designer sarees, wedding sarees, traditional sarees, buy sarees online, saree store, Indian sarees, handloom sarees"
};

export default Meta;
