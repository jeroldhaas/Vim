import * as assert from 'assert';
import * as lexerState from '../src/cmd_line/scanner';

suite("Cmd line tests - lexer state", () => {

	test("can init lexer state", () => {
		var state = new lexerState.Scanner("dog");
		assert.equal(state.input, "dog");
	});
	
	test("can detect EOF with empty input", () => {
		var state = new lexerState.Scanner("");
		assert.ok(state.isAtEof);
	});

	test("next() returns EOF at EOF", () => {
		var state = new lexerState.Scanner("");
		assert.equal(state.next(), lexerState.Scanner.EOF);
		assert.equal(state.next(), lexerState.Scanner.EOF);
		assert.equal(state.next(), lexerState.Scanner.EOF);
	});		

	test("next() can scan", () => {
		var state = new lexerState.Scanner("dog");
		assert.equal(state.next(), "d");
		assert.equal(state.next(), "o");
		assert.equal(state.next(), "g");
		assert.equal(state.next(), lexerState.Scanner.EOF);
	});
	
	test("can emit", () => {
		var state = new lexerState.Scanner("dog cat");
		state.next();
		state.next();
		state.next();
		assert.equal(state.emit(), "dog");
		state.next();
		state.next();
		state.next();
		state.next();
		assert.equal(state.emit(), " cat");		
	});

	test("can ignore", () => {
		var state = new lexerState.Scanner("dog cat");
		state.next();
		state.next();
		state.next();
		state.next();
		state.ignore();
		state.next();
		state.next();
		state.next();
		assert.equal(state.emit(), "cat");		
	});	
});
