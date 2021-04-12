---
title: 'On Trial: Personal Experience versus Hard Data'
date: 2021-04-12 09:26:00 -04:00
categories:
- Independent Research
- featured
tags:
- Internal Controls
- Litigation
- Data Analysis
- Independent Research
author: john_cheffers
image: "/uploads/Courtroom.jpg"
---

*There is a big difference between knowing that similar circumstances have rarely occurred and believing similar circumstances have never occurred.*

Over the last few weeks, a federal lawsuit has offered a rare glimpse inside the world of the Big 4 accounting firms. In Botta v. PricewaterhouseCoopers, LLP, Mauro Botta, a former senior audit manager at PwC, is suing the firm for wrongful termination and retaliation as a whistleblower. He alleges he was fired because he submitted a whistleblower complaint to the SEC. Botta has argued that PwC unlawfully retaliated against him for submitting a “reasonable” complaint. PwC has argued that Botta’s complaint to the SEC was the actual retaliation, and that he was properly fired for misconduct unrelated to his whistleblower complaint.

This is a complex case and has lots of interesting facets. If you want to really want to get a feel for the personal drama, the office politics, and the thorny issues at play, then we highly recommend you read Francine Mckenna’s reporting on the trial at *[The Dig](https://thedig.substack.com/)*. Her writing is well worth the price of admission.

This case, however, is about more than personal drama. The case raises questions about auditor independence, a core safeguard of our capital markets. In live testimony via Zoom we heard about how PwC and its employees navigated the tension that exists between serving the client and protecting auditor independence.

Francine suggested we do some research on a specific accounting issue that came up during some expert testimony offered by PwC. PwC’s expert testimony concerned the reasonableness of the complaint that Botta filed with the SEC, a key issue in the case. But before we go any further, some context is needed.

**Context:**

Botta was a senior manager at PwC (the position right below a partner), working on an audit of [Cavium](https://www.sec.gov/edgar/browse/?CIK=1175609&owner=exclude), a publicly traded company which had approximately $400 million in assets. Botta filed a memo with PwC in 2014 arguing that Cavium ought to declare a material weakness in its internal controls because it purportedly had 2 significant control deficiencies and 11 lesser control deficiencies. (fn.1) (1336) None of these issues by themselves would constitute a material weakness, but Botta argued that in their totality, these deficiencies demonstrated a lack of competency by the financial department that ought to constitute a material weakness.

A material weakness is a deficiency, or combination of deficiencies, in the internal controls of a company that creates a reasonable possibility that a material misstatement of the financial statements will not be prevented or detected. A material weakness can exist even when the financial statements are not misstated.

When deciding whether to issue a material weakness, audit firms consider the guidelines set forth in the PCAOB’s Auditing Standard No. 5. Those guidelines specify that some of the more prominent indicators of a material weakness include (fn.2):

1. Fraud on the part of senior management, regardless of the severity.

2. Restatements to correct material misstatements.

3. A material misstatement from the current period identified by the auditor that would not have otherwise been identified by management.

4. Ineffective oversight by the Audit Committee

This is not an exhaustive list. The PCAOB’s guidelines also include a catchall provision.

Briefly, this catchall provision specifies that any deficiency, or combination of deficiencies, that would cause prudent officials to conclude that they do not have a reasonable assurance that the company’s financial transactions are recorded properly may be classified as a material weakness.

Botta’s memo to PwC proposed that a material weakness for Cavium be filed based on a lack of competency by the financial department concerning income taxes, treasury, and technical accounting. (1358-1359). Since Cavium did not have any fraud, material misstatements, or lack of oversight by the Audit Committee, this material weakness would have fallen under the catchall provision.

Botta’s memo was taken seriously by PwC and an assessment was performed by its National Office. The National Office disagreed with Botta’s assessment, and neither Cavium nor PwC issued a material weakness in 2014. Botta then filed a whistleblower report with the SEC.

**The Assessment by PwC’s Expert**

In this case, PwC hired an expert witness to assess Botta’s report, and the report by PwC. PwC’s expert witness spent twelve years in the SEC’s Enforcement Division and held the position of deputy chief accountant.

According to PwC’s expert witness, it is occasionally appropriate to issue a material weakness for a lack of competency, but that lack of competency is usually accompanied by red flags. (1360-61). The expert witness specified that these red flags were restatements, out of period adjustments, prior material weaknesses, previously identified deficiencies that remain unfixed, and a lack of experience in GAAP by the financial department. (1360-1361).

This expert witness also stated PwC’s assessment of Cavium demonstrated that the company’s financials did not exhibit any of the red flags which he had previously mentioned. Cavium did not have a restatement or out-of-period adjustment. (1362) Nor did it have a prior material weakness.

According to PwC’s assessment, even though PwC had identified many control deficiencies in 2012 and 2013, Cavium was apparently able to remediate these deficiencies by the end of the year, so that all the control deficiencies Botta identified in 2014 were new deficiencies. (1368)

The expert witness also reviewed PwC’s assessment of the expertise of Cavium’s financial department. This assessment focused on the prior experience of the staff and their tenure. According to the PwC expert’s testimony, Cavium’s accounting staff was comprised of numerous Big 4 alumni with significant experience in the industry. When PwC’s expert witness was asked if he had ever seen a material weakness issued based on incompetence when a staff had similar experience, his response was a simple “no.”

PwC’s expert witness concluded that the National Office at PwC came to a reasonable conclusion in deciding not to issue a material weakness for Cavium. Finally, the expert was asked the following question (and it is important because it speaks to the reasonableness of Botta’s whistleblower complaint to the SEC):

> Q. *Sir, in your entire career, including your 12 years at the SEC, have you ever seen a material weakness due to incompetency exist in these circumstances?*
>
> A. *Not in these circumstances.*

PwC’s expert has excellent credentials and a wealth of valuable and relevant experience. Yet even his experience is necessarily limited by the cases that crossed his desk, the clients he served, and the topics discussed by his friends and colleagues.

We were curious, and so was Francine, whether we could find a material weakness filed under comparable circumstances by a careful analysis of the publicly available data.

**Walking Through Our Analysis**

We performed our analysis using the Audit Analytics database, which includes every material weakness since 2004. The Audit Analytics database assigns each material weakness tags categorizing the potential issues at play in the material weaknesses.

Audit Analytics is used by over 300 universities, many different regulators, and prominent accounting firms. It’s the gold standard for accounting related data on public companies.

Audit Analytics tags disclosures about issues that relate to competency for material weaknesses in two ways. One tag is used for a lack of competency by the accounting department, and another for a lack of competency by senior management. These two tags nearly always coincide because hiring an incompetent accounting department is a red flag that the senior management team is incompetent too.

From 2004 to 2020, publicly traded companies listed on the U.S. exchanges disclosed ineffective internal controls over financial reporting 4,444 times. Of those, 2,443 were tagged for incompetency in the accounting department.

![Material Weakness Competency Chart.png](/uploads/Material%20Weakness%20Competency%20Chart.png)

However, small cap companies are [more than 5X](https://blog.watchdogresearch.com/posts/small-companies-5x-more-likely-than-large-companies-to-report-control-deficiency/) as likely as large cap companies to declare a material weakness. Since Cavium was a large company, any analysis that includes small cap companies would be potentially misleading.

To get a more comparable set of companies, we narrowed our search to competence issues at large cap companies. Additionally, we only looked at companies which had hired a Big 4 audit firm. We thought that these large companies, with plenty of resources and the expertise of a Big 4 firm at their disposal, ought to have accounting staff with comparable experience and expertise to Cavium.

The results of this search were far narrower, with only 98 material weaknesses that fit these criteria. These material weaknesses were filed by 69 unique companies, as some companies filed more than one.

PwC’s expert described a number of red flags that were *not* *present* in Cavium’s case. These included fraud, material misstatements or restatements, out of period adjustments, and prior material weaknesses. We combed through the 69 different companies and eliminated the cases where these red flags identified by PwC’s expert were present.

**This analysis has allowed us to conclude that from 2004 to 2020, 22 companies filed a material weakness under comparable circumstances to Cavium.**

![MW over time chart.png](/uploads/MW%20over%20time%20chart.png)

One factor that PwC’s expert discussed that we could not examine was unfixed deficiencies. That is part of an internal assessment done by a company’s auditing firm that never becomes public. So, it is possible that some of the 22 comparable material weaknesses that we identified were due to unfixed control deficiencies.

Given how rare these events are, we are not surprised that PwC’s expert was not personally familiar with them.

We would also note that declaring a material weakness is a big step for an independent auditor. There is no public information that allows us to measure the severity of the control deficiencies that lead to these 22 material weaknesses. They may have been comparable to Cavium’s deficiencies, or they may have been for more severe.

At the beginning of his testimony when PwC’s expert witness was asked if it is ever appropriate to file a material weakness for incompetence, he stated “It's possible but only in very extreme circumstances.” (1360) Our analysis tends to confirm that assessment (so long as you exclude cases where the red flags for incompetency are also present).

However, our analysis shows that material weaknesses *are* filed in similar circumstances to Cavium, but it is rare.

For example, one of PwC’s clients, Allergan plc, who had assets of almost $150 billion, disclosed a material weakness in [2016](https://www.sec.gov/Archives/edgar/data/1578845/000156459017002433/0001564590-17-002433-index.htm) due to a lack of competency concerning the tax implications of certain transactions between their subsidiaries. This material weakness did not result in any misstatements, but the lack of competency concerning tax issues created a substantial risk of misstatement.

**Looking Deeper into The Results**

One interesting fact was that out of these 22 companies, only 8 were headquartered in US. This result stands in contrast with the fact that historically fewer than 20% of U.S. listed companies are located outside of the U.S.

![Results by country.png](/uploads/Results%20by%20country.png)

This disparity is possibly due to differences in culture between foreign affiliates of the Big 4 and the U.S. firms.

We also categorized the result by global audit firm. Here we lumped the US and foreign affiliates of each firm together.

![Results by auditor.png](/uploads/Results%20by%20auditor.png)

We also looked at the *primary* issue raised in the material weakness disclosure (oftentimes the material weaknesses touched on more than one issue). The two primary issues that companies had struggles with were 1) the interplay of IT systems and the financial controls, and 2) complex tax issues that their accounting staff struggled to understand.

![Primary Issue.png](/uploads/Primary%20Issue.png)

**Conclusion**

Personal experience, even the personal experience of a well-qualified expert, has its limitations. A careful analysis of hard data will usually be more accurate.

Note that our analysis does not comment on whether Botta’s whistleblower claim was reasonable, from a legal perspective, in this case. However, there is a big difference between knowing that companies in similar circumstances to Cavium *have* *rarely* issued material weaknesses as opposed to believing that companies in similar circumstances *have* *never* issued a material weakness.

*1) Francine provided us with a transcript of PwC’s expert witness’s testimony on 3/30/2021. All quotes and inferences concerning the trial are taken from the transcript.*

*2) These indicators are derived from the PCAOB’s page on [Accounting Standard No. 5](https://pcaobus.org/oversight/standards/archived-standards/pre-reorganized-auditing-standards-interpretations/details/Auditing_Standard_5). They are edited for brevity and clarity.*