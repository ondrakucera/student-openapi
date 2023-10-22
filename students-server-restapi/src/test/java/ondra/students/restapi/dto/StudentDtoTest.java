package ondra.students.restapi.dto;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

/**
 * Test for {@link StudentDto}.
 */
class StudentDtoTest {

	/**
	 * Tests whether a {@link StudentDto} can be properly constructed. However, in most cases, if it cannot, it will
	 * most likely lead to a compilation error of the test class itself.
	 */
	@Test
	void testConstructor() {
		Assertions.assertNull(new StudentDto().getId(), "StudentDto doesn't construct properly");
	}

}

