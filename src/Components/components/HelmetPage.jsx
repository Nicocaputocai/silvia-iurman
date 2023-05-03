import { Helmet } from "react-helmet-async"

export const HelmetPage = ({section, content}) => {
  return (
    <Helmet>
      <title>{`Silvia Iurman - ${section}`}</title>
      <meta name="description" content={content}/>
    </Helmet>
  )
}
