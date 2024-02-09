import type { MDXComponents } from 'mdx/types'
import {ReactNode} from 'react'

const Brief = ({children}:{children: ReactNode}) => {
  return (
    <div className={'brief'}>
      {children}
    </div>
  )
}
 
export function useMDXComponents(
	components: MDXComponents
): MDXComponents {
  return {
    ...components,
    Brief,
  }
}