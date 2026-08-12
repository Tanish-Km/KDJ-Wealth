import { useState, useMemo } from 'react';
import { GrowthChart, SplitChart, WithdrawalChart } from './CalculatorChart';

/* ── Helpers ── */
const fmt = (val) => {
  if (val >= 10000000) return '₹' + (val / 10000000).toFixed(2) + ' Cr';
  if (val >= 100000) return '₹' + (val / 100000).toFixed(2) + ' L';
  if (val >= 1000) return '₹' + (val / 1000).toFixed(1) + 'k';
  return '₹' + Math.round(val).toLocaleString('en-IN');
};

/* ── Input Component ── */
const CalcInput = ({ label, value, onChange, min, max, step = 1, unit = '', prefix = '' }) => (
  <div className="ce-field">
    <div className="ce-field-header">
      <label>{label}</label>
      <span className="ce-field-value">{prefix}{typeof value === 'number' ? value.toLocaleString('en-IN') : value}{unit}</span>
    </div>
    <input
      type="range"
      min={min} max={max} step={step}
      value={value}
      onChange={(e) => onChange(+e.target.value)}
      className="ce-slider"
    />
    <div className="ce-field-range">
      <span>{prefix}{min.toLocaleString('en-IN')}{unit}</span>
      <span>{prefix}{max.toLocaleString('en-IN')}{unit}</span>
    </div>
  </div>
);

/* ── Result Card ── */
const ResultItem = ({ label, value, accent }) => (
  <div className={`ce-result-item ${accent ? 'ce-result-accent' : ''}`}>
    <span className="ce-result-label">{label}</span>
    <strong className="ce-result-value">{value}</strong>
  </div>
);

/* ═══════════════════════════════════════════
   CALCULATOR CONFIGS
   ═══════════════════════════════════════════ */

/* SIP */
function SIPCalc() {
  const [monthly, setMonthly] = useState(10000);
  const [years, setYears] = useState(10);
  const [rate, setRate] = useState(12);

  const results = useMemo(() => {
    const r = rate / 12 / 100;
    const n = years * 12;
    const invested = monthly * n;
    const fv = monthly * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    const returns = fv - invested;
    const chartData = [];
    for (let y = 1; y <= years; y++) {
      const m = y * 12;
      const totalVal = monthly * ((Math.pow(1 + r, m) - 1) / r) * (1 + r);
      chartData.push({ year: `Yr ${y}`, invested: monthly * m, totalValue: Math.round(totalVal) });
    }
    return { invested, fv, returns, chartData };
  }, [monthly, years, rate]);

  return (
    <>
      <div className="ce-inputs">
        <CalcInput label="Monthly Investment" value={monthly} onChange={setMonthly} min={500} max={200000} step={500} prefix="₹" />
        <CalcInput label="Time Period" value={years} onChange={setYears} min={1} max={40} unit=" yrs" />
        <CalcInput label="Expected Return Rate" value={rate} onChange={setRate} min={1} max={30} step={0.5} unit="%" />
      </div>
      <div className="ce-results-grid">
        <ResultItem label="Total Invested" value={fmt(results.invested)} />
        <ResultItem label="Est. Returns" value={fmt(results.returns)} />
        <ResultItem label="Total Value" value={fmt(results.fv)} accent />
      </div>
      <GrowthChart data={results.chartData} />
      <SplitChart invested={results.invested} returns={results.returns} />
    </>
  );
}

/* Lumpsum */
function LumpsumCalc() {
  const [principal, setPrincipal] = useState(500000);
  const [years, setYears] = useState(10);
  const [rate, setRate] = useState(12);

  const results = useMemo(() => {
    const fv = principal * Math.pow(1 + rate / 100, years);
    const returns = fv - principal;
    const chartData = [];
    for (let y = 1; y <= years; y++) {
      chartData.push({ year: `Yr ${y}`, invested: principal, totalValue: Math.round(principal * Math.pow(1 + rate / 100, y)) });
    }
    return { fv, returns, chartData };
  }, [principal, years, rate]);

  return (
    <>
      <div className="ce-inputs">
        <CalcInput label="Investment Amount" value={principal} onChange={setPrincipal} min={10000} max={10000000} step={10000} prefix="₹" />
        <CalcInput label="Time Period" value={years} onChange={setYears} min={1} max={40} unit=" yrs" />
        <CalcInput label="Expected Return Rate" value={rate} onChange={setRate} min={1} max={30} step={0.5} unit="%" />
      </div>
      <div className="ce-results-grid">
        <ResultItem label="Invested Amount" value={fmt(principal)} />
        <ResultItem label="Est. Returns" value={fmt(results.returns)} />
        <ResultItem label="Total Value" value={fmt(results.fv)} accent />
      </div>
      <GrowthChart data={results.chartData} />
      <SplitChart invested={principal} returns={results.returns} />
    </>
  );
}

/* SWP */
function SWPCalc() {
  const [corpus, setCorpus] = useState(5000000);
  const [withdrawal, setWithdrawal] = useState(25000);
  const [years, setYears] = useState(15);
  const [rate, setRate] = useState(8);

  const results = useMemo(() => {
    const monthlyRate = rate / 12 / 100;
    let balance = corpus;
    let totalWithdrawn = 0;
    const chartData = [];
    for (let y = 1; y <= years; y++) {
      for (let m = 0; m < 12; m++) {
        balance = balance * (1 + monthlyRate) - withdrawal;
        totalWithdrawn += withdrawal;
        if (balance <= 0) { balance = 0; break; }
      }
      chartData.push({ year: `Yr ${y}`, balance: Math.max(0, Math.round(balance)) });
      if (balance <= 0) break;
    }
    return { finalBalance: Math.max(0, balance), totalWithdrawn, chartData };
  }, [corpus, withdrawal, years, rate]);

  return (
    <>
      <div className="ce-inputs">
        <CalcInput label="Initial Corpus" value={corpus} onChange={setCorpus} min={100000} max={50000000} step={100000} prefix="₹" />
        <CalcInput label="Monthly Withdrawal" value={withdrawal} onChange={setWithdrawal} min={1000} max={500000} step={1000} prefix="₹" />
        <CalcInput label="Withdrawal Period" value={years} onChange={setYears} min={1} max={30} unit=" yrs" />
        <CalcInput label="Expected Return Rate" value={rate} onChange={setRate} min={1} max={20} step={0.5} unit="%" />
      </div>
      <div className="ce-results-grid">
        <ResultItem label="Total Withdrawn" value={fmt(results.totalWithdrawn)} />
        <ResultItem label="Remaining Balance" value={fmt(results.finalBalance)} accent />
      </div>
      <WithdrawalChart data={results.chartData} />
    </>
  );
}

/* STP */
function STPCalc() {
  const [corpus, setCorpus] = useState(1000000);
  const [transfer, setTransfer] = useState(50000);
  const [months, setMonths] = useState(12);
  const [sourceRate, setSourceRate] = useState(6);
  const [targetRate, setTargetRate] = useState(12);

  const results = useMemo(() => {
    const sR = sourceRate / 12 / 100;
    const tR = targetRate / 12 / 100;
    let sourceBalance = corpus;
    let targetBalance = 0;
    const chartData = [];
    for (let m = 1; m <= months; m++) {
      sourceBalance = sourceBalance * (1 + sR) - transfer;
      if (sourceBalance < 0) sourceBalance = 0;
      targetBalance = targetBalance * (1 + tR) + transfer;
      if (m % Math.max(1, Math.round(months / 12)) === 0 || m === months) {
        chartData.push({ year: `Mo ${m}`, invested: transfer * m, totalValue: Math.round(targetBalance) });
      }
    }
    return { sourceBalance: Math.max(0, sourceBalance), targetBalance, totalTransferred: transfer * months, chartData };
  }, [corpus, transfer, months, sourceRate, targetRate]);

  return (
    <>
      <div className="ce-inputs">
        <CalcInput label="Source Fund Corpus" value={corpus} onChange={setCorpus} min={50000} max={10000000} step={50000} prefix="₹" />
        <CalcInput label="Monthly Transfer" value={transfer} onChange={setTransfer} min={1000} max={500000} step={1000} prefix="₹" />
        <CalcInput label="Transfer Period" value={months} onChange={setMonths} min={1} max={60} unit=" mo" />
        <CalcInput label="Source Return Rate" value={sourceRate} onChange={setSourceRate} min={1} max={15} step={0.5} unit="%" />
        <CalcInput label="Target Return Rate" value={targetRate} onChange={setTargetRate} min={1} max={30} step={0.5} unit="%" />
      </div>
      <div className="ce-results-grid">
        <ResultItem label="Total Transferred" value={fmt(results.totalTransferred)} />
        <ResultItem label="Source Balance" value={fmt(results.sourceBalance)} />
        <ResultItem label="Target Value" value={fmt(results.targetBalance)} accent />
      </div>
      <GrowthChart data={results.chartData} />
    </>
  );
}

/* Retirement */
function RetirementCalc() {
  const [age, setAge] = useState(30);
  const [retireAge, setRetireAge] = useState(60);
  const [monthlyExpense, setMonthlyExpense] = useState(50000);
  const [inflation, setInflation] = useState(6);
  const [returnRate, setReturnRate] = useState(12);
  const [postReturnRate, setPostReturnRate] = useState(8);

  const results = useMemo(() => {
    const yearsToRetire = retireAge - age;
    const yearsAfterRetire = 25;
    const futureMonthlyExpense = monthlyExpense * Math.pow(1 + inflation / 100, yearsToRetire);
    const annualExpenseAtRetirement = futureMonthlyExpense * 12;
    const realReturnPost = ((1 + postReturnRate / 100) / (1 + inflation / 100)) - 1;
    const corpusNeeded = realReturnPost > 0
      ? annualExpenseAtRetirement * ((1 - Math.pow(1 + realReturnPost, -yearsAfterRetire)) / realReturnPost)
      : annualExpenseAtRetirement * yearsAfterRetire;
    const r = returnRate / 12 / 100;
    const n = yearsToRetire * 12;
    const monthlySIP = corpusNeeded / (((Math.pow(1 + r, n) - 1) / r) * (1 + r));
    const chartData = [];
    for (let y = 1; y <= yearsToRetire; y++) {
      const m = y * 12;
      const accumulated = monthlySIP * ((Math.pow(1 + r, m) - 1) / r) * (1 + r);
      chartData.push({ year: `Age ${age + y}`, invested: Math.round(monthlySIP * m), totalValue: Math.round(accumulated) });
    }
    return { corpusNeeded, monthlySIP, futureMonthlyExpense, chartData };
  }, [age, retireAge, monthlyExpense, inflation, returnRate, postReturnRate]);

  return (
    <>
      <div className="ce-inputs">
        <CalcInput label="Current Age" value={age} onChange={setAge} min={18} max={55} unit=" yrs" />
        <CalcInput label="Retirement Age" value={retireAge} onChange={setRetireAge} min={Math.max(age + 5, 45)} max={70} unit=" yrs" />
        <CalcInput label="Monthly Expenses (Today)" value={monthlyExpense} onChange={setMonthlyExpense} min={10000} max={500000} step={5000} prefix="₹" />
        <CalcInput label="Inflation Rate" value={inflation} onChange={setInflation} min={3} max={12} step={0.5} unit="%" />
        <CalcInput label="Pre-Retirement Return" value={returnRate} onChange={setReturnRate} min={6} max={20} step={0.5} unit="%" />
        <CalcInput label="Post-Retirement Return" value={postReturnRate} onChange={setPostReturnRate} min={4} max={15} step={0.5} unit="%" />
      </div>
      <div className="ce-results-grid">
        <ResultItem label="Monthly Expense at Retirement" value={fmt(results.futureMonthlyExpense)} />
        <ResultItem label="Corpus Needed" value={fmt(results.corpusNeeded)} accent />
        <ResultItem label="Monthly SIP Required" value={fmt(results.monthlySIP)} accent />
      </div>
      <GrowthChart data={results.chartData} />
    </>
  );
}

/* Child Education */
function EducationCalc() {
  const [currentCost, setCurrentCost] = useState(2000000);
  const [childAge, setChildAge] = useState(5);
  const [educationAge, setEducationAge] = useState(18);
  const [inflation, setInflation] = useState(8);
  const [returnRate, setReturnRate] = useState(12);

  const results = useMemo(() => {
    const yearsLeft = educationAge - childAge;
    const futureCost = currentCost * Math.pow(1 + inflation / 100, yearsLeft);
    const r = returnRate / 12 / 100;
    const n = yearsLeft * 12;
    const monthlySIP = futureCost / (((Math.pow(1 + r, n) - 1) / r) * (1 + r));
    const chartData = [];
    for (let y = 1; y <= yearsLeft; y++) {
      const m = y * 12;
      const accumulated = monthlySIP * ((Math.pow(1 + r, m) - 1) / r) * (1 + r);
      chartData.push({ year: `Yr ${y}`, invested: Math.round(monthlySIP * m), totalValue: Math.round(accumulated) });
    }
    return { futureCost, monthlySIP, chartData };
  }, [currentCost, childAge, educationAge, inflation, returnRate]);

  return (
    <>
      <div className="ce-inputs">
        <CalcInput label="Current Education Cost" value={currentCost} onChange={setCurrentCost} min={100000} max={20000000} step={100000} prefix="₹" />
        <CalcInput label="Child's Current Age" value={childAge} onChange={setChildAge} min={0} max={15} unit=" yrs" />
        <CalcInput label="Education Starts At" value={educationAge} onChange={setEducationAge} min={Math.max(childAge + 3, 15)} max={25} unit=" yrs" />
        <CalcInput label="Education Inflation" value={inflation} onChange={setInflation} min={4} max={15} step={0.5} unit="%" />
        <CalcInput label="Expected Return Rate" value={returnRate} onChange={setReturnRate} min={6} max={20} step={0.5} unit="%" />
      </div>
      <div className="ce-results-grid">
        <ResultItem label="Future Education Cost" value={fmt(results.futureCost)} />
        <ResultItem label="Monthly SIP Required" value={fmt(results.monthlySIP)} accent />
      </div>
      <GrowthChart data={results.chartData} />
    </>
  );
}

/* Child Marriage */
function MarriageCalc() {
  const [currentCost, setCurrentCost] = useState(2500000);
  const [childAge, setChildAge] = useState(5);
  const [marriageAge, setMarriageAge] = useState(25);
  const [inflation, setInflation] = useState(6);
  const [returnRate, setReturnRate] = useState(12);

  const results = useMemo(() => {
    const yearsLeft = marriageAge - childAge;
    const futureCost = currentCost * Math.pow(1 + inflation / 100, yearsLeft);
    const r = returnRate / 12 / 100;
    const n = yearsLeft * 12;
    const monthlySIP = futureCost / (((Math.pow(1 + r, n) - 1) / r) * (1 + r));
    const chartData = [];
    for (let y = 1; y <= yearsLeft; y++) {
      const m = y * 12;
      const accumulated = monthlySIP * ((Math.pow(1 + r, m) - 1) / r) * (1 + r);
      chartData.push({ year: `Yr ${y}`, invested: Math.round(monthlySIP * m), totalValue: Math.round(accumulated) });
    }
    return { futureCost, monthlySIP, chartData };
  }, [currentCost, childAge, marriageAge, inflation, returnRate]);

  return (
    <>
      <div className="ce-inputs">
        <CalcInput label="Estimated Marriage Cost (Today)" value={currentCost} onChange={setCurrentCost} min={100000} max={30000000} step={100000} prefix="₹" />
        <CalcInput label="Child's Current Age" value={childAge} onChange={setChildAge} min={0} max={20} unit=" yrs" />
        <CalcInput label="Expected Marriage Age" value={marriageAge} onChange={setMarriageAge} min={Math.max(childAge + 5, 21)} max={35} unit=" yrs" />
        <CalcInput label="Inflation Rate" value={inflation} onChange={setInflation} min={3} max={12} step={0.5} unit="%" />
        <CalcInput label="Expected Return Rate" value={returnRate} onChange={setReturnRate} min={6} max={20} step={0.5} unit="%" />
      </div>
      <div className="ce-results-grid">
        <ResultItem label="Future Marriage Cost" value={fmt(results.futureCost)} />
        <ResultItem label="Monthly SIP Required" value={fmt(results.monthlySIP)} accent />
      </div>
      <GrowthChart data={results.chartData} />
    </>
  );
}

/* Dream Home */
function HomeCalc() {
  const [currentPrice, setCurrentPrice] = useState(5000000);
  const [years, setYears] = useState(10);
  const [inflation, setInflation] = useState(7);
  const [returnRate, setReturnRate] = useState(12);
  const [downPaymentPct, setDownPaymentPct] = useState(20);

  const results = useMemo(() => {
    const futurePrice = currentPrice * Math.pow(1 + inflation / 100, years);
    const downPaymentNeeded = futurePrice * (downPaymentPct / 100);
    const r = returnRate / 12 / 100;
    const n = years * 12;
    const monthlySIP = downPaymentNeeded / (((Math.pow(1 + r, n) - 1) / r) * (1 + r));
    const chartData = [];
    for (let y = 1; y <= years; y++) {
      const m = y * 12;
      const accumulated = monthlySIP * ((Math.pow(1 + r, m) - 1) / r) * (1 + r);
      chartData.push({ year: `Yr ${y}`, invested: Math.round(monthlySIP * m), totalValue: Math.round(accumulated) });
    }
    return { futurePrice, downPaymentNeeded, monthlySIP, chartData };
  }, [currentPrice, years, inflation, returnRate, downPaymentPct]);

  return (
    <>
      <div className="ce-inputs">
        <CalcInput label="Current Home Price" value={currentPrice} onChange={setCurrentPrice} min={500000} max={100000000} step={500000} prefix="₹" />
        <CalcInput label="Planning to Buy In" value={years} onChange={setYears} min={1} max={25} unit=" yrs" />
        <CalcInput label="Property Inflation" value={inflation} onChange={setInflation} min={3} max={15} step={0.5} unit="%" />
        <CalcInput label="Down Payment" value={downPaymentPct} onChange={setDownPaymentPct} min={10} max={100} step={5} unit="%" />
        <CalcInput label="Expected Return Rate" value={returnRate} onChange={setReturnRate} min={6} max={20} step={0.5} unit="%" />
      </div>
      <div className="ce-results-grid">
        <ResultItem label="Future Home Price" value={fmt(results.futurePrice)} />
        <ResultItem label="Down Payment Needed" value={fmt(results.downPaymentNeeded)} />
        <ResultItem label="Monthly SIP Required" value={fmt(results.monthlySIP)} accent />
      </div>
      <GrowthChart data={results.chartData} />
    </>
  );
}

/* Goal / Wealth */
function GoalCalc() {
  const [targetAmount, setTargetAmount] = useState(5000000);
  const [years, setYears] = useState(10);
  const [returnRate, setReturnRate] = useState(12);

  const results = useMemo(() => {
    const r = returnRate / 12 / 100;
    const n = years * 12;
    const monthlySIP = targetAmount / (((Math.pow(1 + r, n) - 1) / r) * (1 + r));
    const invested = monthlySIP * n;
    const returns = targetAmount - invested;
    const chartData = [];
    for (let y = 1; y <= years; y++) {
      const m = y * 12;
      const accumulated = monthlySIP * ((Math.pow(1 + r, m) - 1) / r) * (1 + r);
      chartData.push({ year: `Yr ${y}`, invested: Math.round(monthlySIP * m), totalValue: Math.round(accumulated) });
    }
    return { monthlySIP, invested, returns, chartData };
  }, [targetAmount, years, returnRate]);

  return (
    <>
      <div className="ce-inputs">
        <CalcInput label="Target Amount" value={targetAmount} onChange={setTargetAmount} min={100000} max={100000000} step={100000} prefix="₹" />
        <CalcInput label="Time to Achieve" value={years} onChange={setYears} min={1} max={40} unit=" yrs" />
        <CalcInput label="Expected Return Rate" value={returnRate} onChange={setReturnRate} min={6} max={25} step={0.5} unit="%" />
      </div>
      <div className="ce-results-grid">
        <ResultItem label="Monthly SIP Required" value={fmt(results.monthlySIP)} accent />
        <ResultItem label="Total Investment" value={fmt(results.invested)} />
        <ResultItem label="Wealth Gain" value={fmt(results.returns)} />
      </div>
      <GrowthChart data={results.chartData} />
      <SplitChart invested={results.invested} returns={results.returns} />
    </>
  );
}

/* Inflation */
function InflationCalc() {
  const [amount, setAmount] = useState(100000);
  const [years, setYears] = useState(10);
  const [inflationRate, setInflationRate] = useState(6);

  const results = useMemo(() => {
    const futureValue = amount * Math.pow(1 + inflationRate / 100, years);
    const purchasingPower = amount / Math.pow(1 + inflationRate / 100, years);
    const erosion = amount - purchasingPower;
    const chartData = [];
    for (let y = 0; y <= years; y++) {
      chartData.push({
        year: `Yr ${y}`,
        totalValue: Math.round(amount * Math.pow(1 + inflationRate / 100, y)),
        invested: amount,
      });
    }
    return { futureValue, purchasingPower, erosion, chartData };
  }, [amount, years, inflationRate]);

  return (
    <>
      <div className="ce-inputs">
        <CalcInput label="Current Amount" value={amount} onChange={setAmount} min={1000} max={10000000} step={1000} prefix="₹" />
        <CalcInput label="Time Period" value={years} onChange={setYears} min={1} max={40} unit=" yrs" />
        <CalcInput label="Expected Inflation" value={inflationRate} onChange={setInflationRate} min={2} max={15} step={0.5} unit="%" />
      </div>
      <div className="ce-results-grid">
        <ResultItem label="Future Cost of Same Goods" value={fmt(results.futureValue)} accent />
        <ResultItem label="Purchasing Power of ₹{amount.toLocaleString('en-IN')}" value={fmt(results.purchasingPower)} />
        <ResultItem label="Value Erosion" value={fmt(results.erosion)} />
      </div>
      <GrowthChart data={results.chartData} />
    </>
  );
}

/* ═══════════════════════════════════════════
   CALCULATOR ENGINE — Renders the right calc
   ═══════════════════════════════════════════ */
const calculatorMap = {
  sip: SIPCalc,
  lumpsum: LumpsumCalc,
  swp: SWPCalc,
  stp: STPCalc,
  retirement: RetirementCalc,
  education: EducationCalc,
  marriage: MarriageCalc,
  home: HomeCalc,
  goal: GoalCalc,
  inflation: InflationCalc,
};

export default function CalculatorEngine({ calculatorId }) {
  const CalcComponent = calculatorMap[calculatorId];
  if (!CalcComponent) return <p>Calculator not found.</p>;
  return (
    <div className="ce-wrapper">
      <CalcComponent />
    </div>
  );
}
