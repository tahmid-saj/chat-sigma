import "./home.styles"
import { HomeContainer } from "./home.styles"
import MediaCard from "../../components/shared/mui/media-card/media-card.component"

import { COLOR_CODES, NAV_LINKS } from "../../utils/constants/shared.constants"

const cardStyles = {
  width: 360,
  height: 450,
  backgroundColor: COLOR_CODES.general["1"],
  marginBottom: "6%"
}

const Home = () => {
  const homeCardContent = {
    chat: {
      header: "Chat",
      description: "Get answers to every day queries",
      imageUrl: "https://media.licdn.com/dms/image/D4D12AQESxyAG3GNCQQ/article-cover_image-shrink_720_1280/0/1688674501094?e=2147483647&v=beta&t=TbnHoFrlrAZCHk6Qfm6lfBD9qNSgJ0IyOFdKa32mBWE",
      path: NAV_LINKS.paths.chat
    },
    compliance: {
      header: "Compliance",
      description: "Any data entered is not collected or persisted",
      imageUrl: "https://media.istockphoto.com/id/1470864494/vector/computer-cloud-database-sharing-file-storage-and-search-business-technology-services-and.jpg?b=1&s=612x612&w=0&k=20&c=F4P8bKXbSsoZpCF4JahdPLz4OV7imHxMvgfDew4y9J8=",
      path: NAV_LINKS.paths.chat
    },
    export : {
      header: "Export",
      description: "Get a summary of the chat session",
      imageUrl: "https://media.istockphoto.com/id/1000975726/vector/document-email-on-notebook-mail-letter-with-documents-for-signing-on-computer-screen-inbox.jpg?s=612x612&w=0&k=20&c=Wd3JN3iXHnJtASEGQi0nnNHcQwPMEdDVW2MSnwF60pI=",
      path: NAV_LINKS.paths.export
    }
  }

  return (
    <div className="container">
      <HomeContainer>
        <div className="row justify-content-center align-items-center">
          <div className="col-sm-12 col-lg-4">
            <MediaCard styles={ cardStyles } header={ homeCardContent.chat.header } imageUrl={ homeCardContent.chat.imageUrl }
            imageTitle={ homeCardContent.chat.header } path={ homeCardContent.chat.path } content={ homeCardContent.chat.description }></MediaCard>
          </div>

          <div className="col-sm-12 col-lg-4">
            <MediaCard styles={ cardStyles } header={ homeCardContent.compliance.header } imageUrl={ homeCardContent.compliance.imageUrl }
            imageTitle={ homeCardContent.compliance.header } path={ homeCardContent.compliance.path } content={ homeCardContent.compliance.description }></MediaCard>
          </div>

          <div className="col-sm-12 col-lg-4">
            <MediaCard styles={ cardStyles } header={ homeCardContent.export.header } imageUrl={ homeCardContent.export.imageUrl }
            imageTitle={ homeCardContent.export.header } path={ homeCardContent.export.path } content={ homeCardContent.export.description }></MediaCard>
          </div>
        </div>
      </HomeContainer>
    </div>
  )
}

export default Home