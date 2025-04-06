import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Ruxandra Iordache",
      title:
        "China to impose 34% retaliatory tariff on all goods imported from the U.S. - CNBC",
      description:
        "Beijing's measures come in the wake of duties imposed by U.S. President Donald Trump's administration earlier this week.",
      url: "https://www.cnbc.com/2025/04/04/china-to-impose-34percent-retaliatory-tariff-on-all-goods-imported-from-the-us.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/106677114-15983545702020-08-25t100023z_1719720997_rc2yki97n9wc_rtrmadp_0_usa-china-tech.jpeg?v=1692261559&w=1920&h=1080",
      publishedAt: "2025-04-04T10:22:32Z",
      content:
        "Chinese and U.S. flags flutter near The Bund, before U.S. trade delegation meet their Chinese counterparts for talks in Shanghai, China July 30, 2019.\r\nChina's finance ministry on Friday said it will… [+1867 chars]",
    },
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Alex Harring",
      title:
        "Dow futures fall after tariffs push market to biggest losses since 2020: Live updates - CNBC",
      description:
        "The three major indexes are on track to end the week down after Thursday's steep drop.",
      url: "https://www.cnbc.com/2025/04/03/stock-market-today-live-updates.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/108126249-1743714616841-108126249-17437145052025-04-03t205543z_329070345_rc2kqdaltxit_rtrmadp_0_usa-stocks.jpg?v=1743714626&w=1920&h=1080",
      publishedAt: "2025-04-04T06:14:00Z",
      content:
        "The stock market was headed for another pounding Friday after China retaliated with new tariffs on U.S. goods, raising fears a trade war will tip the globe into a recession.\r\nFutures tied to the blue… [+2533 chars]",
    },
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Sam Meredith",
      title:
        "BP chair Helge Lund to step down after oil major pledges strategic reset - CNBC",
      description:
        "British oil major BP on Friday said its chair Helge Lund will step down, kickstarting a succession process with support from the wider board.",
      url: "https://www.cnbc.com/2025/04/04/bp-chair-helge-lund-to-step-down.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/108053443-1730107794437-gettyimages-2163819492-kalka-oilandga240729_npYR0.jpeg?v=1743746893&w=1920&h=1080",
      publishedAt: "2025-04-04T06:11:17Z",
      content:
        'British oil major BP on Friday said its chair Helge Lund will soon step down, kickstarting a succession process shortly after the company launched a fundamental strategic reset.\r\n"Having fundamentall… [+2452 chars]',
    },
    {
      source: {
        id: "nbc-news",
        name: "NBC News",
      },
      author: "Courtney Kube, Dan De Luce",
      title:
        "National Security Agency chief and deputy director dismissed - NBC News",
      description:
        "Air Force Gen. Timothy Haugh was both the head of U.S. Cyber Command and the director of the NSA since February 2024.",
      url: "https://www.nbcnews.com/politics/national-security/national-security-agency-chief-deputy-director-dismissed-rcna199647",
      urlToImage:
        "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2025-04/250403-Timothy-Haugh-ac-1101p-258e3c.jpg",
      publishedAt: "2025-04-04T03:06:00Z",
      content:
        "The director and the No. 2 official at the National Security Agency were ousted from their positions Thursday, according to a defense official and three sources with knowledge of the matter.\r\nIt was … [+2571 chars]",
    },
    {
      source: {
        id: "nbc-news",
        name: "NBC News",
      },
      author: "Tyler Kingkade",
      title:
        "Education department threatens to cut funding to school districts over DEI practices - NBC News",
      description:
        "The Trump administration threatened to cut school funding if states don’t certify that they do not have unlawful diversity, equity and inclusion practices.",
      url: "https://www.nbcnews.com/news/education/education-department-dei-discrimination-trump-funding-cuts-rcna199575",
      urlToImage:
        "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2025-04/250403--Linda-McMahon-aa-241-306d40.jpg",
      publishedAt: "2025-04-03T22:59:22Z",
      content:
        "The Trump administration on Thursday threatened to pull federal fundingfrom K-12 districts and states if they dont certify within 10 days that they do not have unlawful diversity, equity and inclusio… [+5101 chars]",
    },
    {
      source: {
        id: null,
        name: "NBC 7 San Diego",
      },
      author: "Alex Portée | TODAY",
      title:
        "Nursing influencer Hailey Okula dies during childbirth after facing infertility struggles - NBC 7 San Diego",
      description:
        "Hailey Okula, an ER nurse known on Instagram as Nurse Hailey, died from childbirth complications shortly after welcoming her son.",
      url: "https://www.nbcsandiego.com/news/national-international/nursing-influencer-hailey-okula-dies-during-childbirth-after-facing-infertility-struggles/3794319/",
      urlToImage:
        "https://media.nbcsandiego.com/2025/04/crew.jpg?quality=85&strip=all&resize=1200%2C675",
      publishedAt: "2025-04-03T15:19:57Z",
      content:
        "For nine months, Hailey Okulas Instagram followers watched her balance the demands of her job with the happiness of preparing for her and her husbands first child. Now, that same community is coming … [+3508 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsNine - Top headlines</h2>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title.slice(0, 44)}
                  description={element.description.slice(0, 88)}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
