interface Project {
  title: string;
  description: string;
  href?: string;
  imgSrc?: string;
}

const projectsData: Project[] = [
  {
    title: 'Home price estimator for moroccan appartments',
    description: `Based on the data from the Moroccan real estate market, this app uses advanced algorithms to estimate the price of an apartment in Morocco, plus other features`,
    imgSrc: '/static/images/prixdialdar.png',
    href: 'https://prixdialdar.com/',
  },
];

export default projectsData;
