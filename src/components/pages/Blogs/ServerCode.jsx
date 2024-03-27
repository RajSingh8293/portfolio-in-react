import { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import CheckIcon from '@mui/icons-material/Check'
import ContentPasteIcon from '@mui/icons-material/ContentPaste'
const ServerCode = ({ codeString }) => {
  const [copy, setCopy] = useState(false)

  const copyCode = () => {
    navigator.clipboard.writeText(codeString)
    setCopy(true)
    setTimeout(() => {
      setCopy(false)
    }, 2000)
  }

  return (
    <div className="relative bg-[#444444] rounded-md overflow-hidden">
      <div className="absolute top-3 right-10">
        {copy ? (
          <button className="text-[#3ba93b]">
            <CheckIcon className="w-[20px] mr-1" />
            Copied!
          </button>
        ) : (
          <button className="text-[#d1cccc]" onClick={copyCode}>
            <ContentPasteIcon className="w-[20px] mr-1" />
            Copy
          </button>
        )}
      </div>

      <SyntaxHighlighter
        language="javascript"
        style={dark}
        customStyle={{
          padding: '20px',
          scrollBehavior: 'auto',
        }}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  )
}

export default ServerCode
