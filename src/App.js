
import { Box } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import {Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed} from './components/index.js'



function App() {
  return (
    <BrowserRouter>
      <Box sx={{ background: "#000" }}>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Feed />} />
          <Route path='/video/:id' element={<VideoDetail />} />
          <Route path='/channel/:id' element={< ChannelDetail/>} />
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App


//import shortcut== double click+ cntrl and space