import test from 'ava'
import { helloKitty, helloDoge, helloDolphin } from '.'

test('says hello', t => {
  t.is(helloDoge(), 'hello 🐕')
})

test('says hello to cat', t => {
  t.is(helloKitty(), 'hello 🐈')
})

test('says hello to dolphin', t => {
  t.is(helloDolphin(), 'hello 🐬')
})
