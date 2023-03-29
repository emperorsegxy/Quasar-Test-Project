export default interface Field {
  name: string
  value: string
  icon?: string
  placeholder: string
  type?: InputType
  doesNotSpan?: boolean
  label: string
  optional?: boolean
  items?: never[]
}

type InputType = 'text' | 'number' | 'email' | 'password' | 'select'
