import { QuotationMarkIcon } from '~/components/svgs/icons'

export default function QuoteAbrahamCalsin() {
  return (
    <div className="sm:my-11.2 my-6.5 flex gap-2.5 mx-auto max-w-550 rounded-md bg-white/50 dark:bg-secondary/10 p-2.5 sm:p-4.5 border-px border-primary-600 dark:border-secondary text-primary-600 dark:text-secondary sm:text-lg">
      <div className="w-9.5">
        <QuotationMarkIcon />
      </div>

      <blockquote className="italic">
        Todo lo que hagas con esfuerzo y sacrificio, lo obtendras con beneficios; ¡No te rindas!.
        <br />
        <b className="block mt-1">— Abraham Calsin</b>
      </blockquote>
    </div>
  )
}
