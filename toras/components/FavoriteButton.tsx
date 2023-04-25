import React,{useCallback,useMemo} from 'react'
import axios from "axios"

import useCurrentUser from '@/hooks/useCurrentUser'
import useFavorite from '@/hooks/useFavorite'

interface FavoriteButtonProps{
    movieId: string
}
const FavoriteButton:React.Fc<FavoriteButtonProps>= ({movieId}) => {
  return (
    <div>FavoriteButton</div>
  )
}

export default FavoriteButton