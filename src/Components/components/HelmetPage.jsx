import { Helmet } from "react-helmet"

export const HelmetPage = ({section, content}) => {
  return (
    <Helmet>
      <title>Silvia Iurman - {section}</title>
      <meta name="description" content={content}/>
    </Helmet>
  )
}
