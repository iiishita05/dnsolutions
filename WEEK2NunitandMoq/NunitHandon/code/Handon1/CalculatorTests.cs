using NUnit.Framework;
using CalcLibrary;

namespace CalcLibrary.Tests
{
    [TestFixture]
    public class CalculatorTests
    {
        SimpleCalculator _calc;

        [SetUp]
        public void Init()
        {
            _calc = new SimpleCalculator();
        }

        [TearDown]
        public void Cleanup()
        {
            _calc = null;
        }

        [Test]
        [TestCase(2, 3, 5)]
        [TestCase(0, 0, 0)]
        [TestCase(-1, -2, -3)]
        public void Addition_TestCases(double a, double b, double expected)
        {
            var result = _calc.Addition(a, b);
            Assert.That(result, Is.EqualTo(expected));
        }
    }
}
