import { PortfolioVideo } from "./portfolio-video.model";

export class PortfolioService {
    portfolioVideos: PortfolioVideo[] = [
        new PortfolioVideo('Eminem AI','Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?','../../assets/images/marimg1.png'),
        new PortfolioVideo("I'm on Everything (2020)",'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?','../../assets/images/marimg2.png'),
        //new PortfolioVideo("Kid Cudi Cudder",'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?','../../assets/images/marimg3.png'),
        new PortfolioVideo('Die Alone','Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?','../../assets/images/marimg4.png'),
        new PortfolioVideo("I'm on Everything",'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?','../../assets/images/marimg5.png'),
    ]
    getPortfolio(){
        return this.portfolioVideos.slice();
    }
}