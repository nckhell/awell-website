import { GetStaticPaths, GetStaticProps } from 'next'
import { type MDXRemoteSerializeResult, MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { ParsedUrlQuery } from 'querystring'
import { ReactNode } from 'react'

import { DocsHeader } from '../../src/components/Docs/atoms'
import { DocsLayout } from '../../src/components/Layouts'
import { SEO } from '../../src/components/SEO'
import { TOC } from '../../src/components/TOC'
import { mdxComponents, mdxOptions } from '../../src/config/mdx'
import { apiMenu } from '../../src/config/menus'
import { TableOfContentsType } from '../../src/types/toc.types'
import {
  getAllApiDocs,
  getApiDoc,
  getBadeForDoc,
  getHeadingForDoc,
  getTableOfContents,
} from '../../src/utils'

type ApiPageProps = {
  frontMatter: {
    title: string
    description: string
  }
  mdxSource: MDXRemoteSerializeResult
  slug: string
  toc: TableOfContentsType
}

export default function ApiPage({
  frontMatter,
  mdxSource,
  slug,
  toc,
}: ApiPageProps) {
  const heading = getHeadingForDoc(slug)
  const badge = getBadeForDoc(slug)

  return (
    <div>
      <SEO
        title={frontMatter.title}
        description={frontMatter.description}
        url={`/api-reference/${slug}`}
      />
      {heading && (
        <DocsHeader
          heading={heading}
          title={frontMatter.title}
          description={frontMatter.description}
          badge={badge}
          githubUrl={`/content/api-reference/${slug}.mdx`}
          postmanUrl={'#'}
        />
      )}
      <div id="content-wrapper">
        <MDXRemote {...mdxSource} components={mdxComponents} />
      </div>
      <div className="fixed z-20 top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] w-[19.5rem] py-10 px-8 overflow-y-auto hidden xl:block">
        <h5 className="text-slate-900 font-semibold mb-4 text-sm leading-6 dark:text-slate-100">
          On this page
        </h5>
        <TOC toc={toc}></TOC>
      </div>
    </div>
  )
}

ApiPage.getLayout = function getLayout(page: ReactNode) {
  return <DocsLayout menu={apiMenu}>{page}</DocsLayout>
}

interface Iparams extends ParsedUrlQuery {
  slug: string[]
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as Iparams
  const slugString = slug.join('/')
  const { frontMatter, content } = await getApiDoc(slugString)

  const toc = getTableOfContents(content)
  // https://github.com/hashicorp/next-mdx-remote/issues/86
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const mdxSource = await serialize(content, mdxOptions)

  return {
    props: {
      frontMatter,
      mdxSource,
      slug: slugString,
      toc,
    },
  }
}

export const getStaticPaths: GetStaticPaths = () => {
  const docs = getAllApiDocs()

  const paths = docs.map((doc) => ({
    params: {
      slug: doc.slug.split('/'),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}
