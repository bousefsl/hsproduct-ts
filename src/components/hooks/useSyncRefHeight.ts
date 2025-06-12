//Example
//https://dev.to/9zemian5/sync-height-between-elements-in-react-1fg0

import { useLayoutEffect, type RefObject } from "react"

type Target = RefObject<HTMLElement | null>

//Store all elements per key, so it is easy to retrieve them
const store: Record<string, Target[]> = {}

// Triggered when useLayoutEffect is executed on any of the components that use useSyncRefHeight hook
const handleResize = (key: string) => {
  //Get the window's inner width
  //For small mobile when each main element generally tends to stack, we don't want the heights to sync
  const windowSize = window.innerWidth
  //Maximum window width setting (small mobile)
  const maxWidth = 575

  //Get all elements with the same key
  const elements = store[key]
  if (elements) {
    let max = 0

    //Reset height of all elements on each window resize
    elements.forEach((element) => {
      if (element.current) {
        element.current.style.minHeight = "0px"
      }
    })

    //Find the element with highest clientHeight value
    elements.forEach((element) => {
      if (element.current && element.current.clientHeight > max) {
        max = element.current.clientHeight
      }
    })

    //Update height of all 'joined' elements
    elements.forEach((element) => {
      if (element.current) {
        if (windowSize > maxWidth) {
          element.current.style.minHeight = `${max}px`
        } else {
          element.current.style.minHeight = "auto"
        }
      }
    })
  }
}

//Add element to the store when component is mounted and return cleanup function
const add = (key: string, element: Target) => {
  //Create store if missing
  if (!store[key]) {
    store[key] = []
  }

  store[key].push(element)

  //Cleanup function
  return () => {
    const index = store[key].indexOf(element)
    if (index > -1) {
      store[key].splice(index, 1)
    }
  }
}

//Receives multiple elements ([key, element] pairs). This way one hook can be used to handle multiple elements
export type UseSyncRefHeightProps = Array<[string, Target]>

export const useSyncRefHeight = (refs: UseSyncRefHeightProps, deps?: any[]) => {
  useLayoutEffect(() => {
    //Store cleanup functions for each entry
    const cleanups: (() => void)[] = []

    refs.forEach(([key, element]) => {
      //Add element ref to store
      cleanups.push(add(key, element))
    })

    return () => {
      //Cleanup when component is destroyed
      cleanups.forEach((cleanup) => cleanup())
    }
  }, [])

  useLayoutEffect(() => {
    //When any of the dependencies changes, update all elements heights
    refs.forEach(([key]) => {
      handleResize(key)
    })
  }, deps)
}
