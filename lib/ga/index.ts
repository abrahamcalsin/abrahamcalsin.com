type gtagProps = {
  window: any,
  url: string,
  action: string,
  params: string
}

export const pageview = (props: gtagProps) => {

  const { window, url } = props;

  window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
    page_path: url,
  })
}

export const event = (props: gtagProps) => {

  const {window, action, params} = props;

  window.gtag("event", action, params)
}
