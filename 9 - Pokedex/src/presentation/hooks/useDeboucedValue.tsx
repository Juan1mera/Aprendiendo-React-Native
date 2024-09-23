
import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

const useDeboucedValue = (input: string ='',   timer: number = 500) => {

    const [deboucedValue, setdeboucedValue] = useState(input)

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setdeboucedValue(input)
        }, timer);

        return () => {
            clearTimeout(timeOut);
        }
    }, [input])

  return deboucedValue
}

export default useDeboucedValue