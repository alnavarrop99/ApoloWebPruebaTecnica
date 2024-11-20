import type { Preview } from "@storybook/react";
import '../src/index.css'
import React, { useEffect, useState } from 'react'
import setup from "../src/msw";
import { Loading } from '../src/comp'

const preview: Preview = {
  decorators: [ (Story) => {
    const [loading, setLoading] = useState(true)
    if(!localStorage?.db) localStorage.db = JSON.stringify({}) as unknown as typeof localStorage.db
    useEffect( () => { handleStart() }, [] )

    if(loading) return <Loading variant="infinity" />
    return <Story />

    async function handleStart() {
      try{
        await setup.start()
      } catch(err){
        throw new Error('mock not available')
      } finally {
        setLoading(false)
      }
    }
  } ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
