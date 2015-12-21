import test from 'ava';
import fn from './';

test('error', t => {
	t.throws(fn.bind(fn, 5, /f/), 'The input should be a string');
});

test('occurrences', t => {
	t.is(fn('', 'f'), 0);
	t.is(fn('foo bar', 'f.*'), 1);
	t.is(fn('foo bar', /f.*/), 1);
	t.is(fn('foo bar', new RegExp('f.*')), 1);
	t.is(fn('Foo Bar', /f/), 0);
	t.is(fn('Foo Bar', /f/i), 1);
	t.is(fn('Foo Bar', [/f/i, /b/i]), 2);
	t.is(fn('Foo Bar', [new RegExp('F'), new RegExp('B')]), 2);
	t.is(fn('foo bar\nfoo baz', [/foo/, /baz/]), 2);
});
